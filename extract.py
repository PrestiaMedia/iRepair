import re, json
from bs4 import BeautifulSoup
import requests

with open("original_home.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# Extract CSS links
css_links = []
for link in soup.find_all("link", rel="stylesheet"):
    css_links.append(link.get("href"))

# Extract inline styles
inline_styles = []
for style in soup.find_all("style"):
    inline_styles.append(style.text)

# Extract Header HTML
header = soup.find("header")
header_html = str(header) if header else ""

# Extract Hero Section HTML (usually the first main section/row after header)
# Let's look for elements with class "fl-row" inside the content area
content = soup.find(id="content")
hero = content.find(class_="fl-row") if content else None
hero_html = str(hero) if hero else ""

result = {
    "css_links": css_links,
    "inline_styles_count": len(inline_styles),
    "header_html": header_html[:500] + "..." if len(header_html) > 500 else header_html,
    "hero_html": hero_html[:500] + "..." if len(hero_html) > 500 else hero_html
}

print(json.dumps(result, indent=2))

