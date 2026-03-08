import os
import urllib.request
import xml.etree.ElementTree as ET
import re
import html
try:
    from markdownify import markdownify as md
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "markdownify", "beautifulsoup4"])
    from markdownify import markdownify as md
from bs4 import BeautifulSoup
from datetime import datetime

FEED_URL = "https://pwnforfunandprofit.substack.com/feed"
OUTPUT_DIR = "content/"

def fetch_feed():
    print(f"Fetching {FEED_URL}...")
    req = urllib.request.Request(FEED_URL, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        return response.read()

def parse_and_save(xml_content):
    print("Parsing RSS feed...")
    root = ET.fromstring(xml_content)
    
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    for item in root.findall(".//item"):
        title = item.find("title").text
        pub_date_str = item.find("pubDate").text
        pub_date = datetime.strptime(pub_date_str, "%a, %d %b %Y %H:%M:%S %Z")
        content_encoded = item.find("{http://purl.org/rss/1.0/modules/content/}encoded").text
        
        # Determine slug
        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
        
        # HTML parsing for extra clean up
        soup = BeautifulSoup(content_encoded, 'html.parser')
        
        # Remove substack specific widgets
        for widget in soup.find_all(class_='subscription-widget-wrap-editor'):
            widget.decompose()
        for banner in soup.find_all(class_='button-wrapper'):
            banner.decompose()
            
        clean_html = str(soup)
        
        # Convert HTML to Markdown
        markdown_content = md(clean_html, heading_style="ATX", bypass_tables=False)
        
        # Create TOML frontmatter
        frontmatter = f"""+++
title = "{title.replace('"', '\\"')}"
date = {pub_date.strftime('%Y-%m-%d')}
description = "{item.find('description').text.replace('"', '\\"') if item.find('description') is not None else ''}"
[taxonomies]
tags = ["blog"]
+++

"""
        file_path = os.path.join(OUTPUT_DIR, f"{slug}.md")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(frontmatter + markdown_content)
        print(f"Saved: {file_path}")

if __name__ == "__main__":
    xml_data = fetch_feed()
    parse_and_save(xml_data)
    print("Migration complete!")
