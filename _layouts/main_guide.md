---
layout: default
---

<article class="guide">
{{ content }}
{% capture guides %}
{% include main_guides.md %}
{% endcapture %}
{{ guides | markdownify }}
</article>
