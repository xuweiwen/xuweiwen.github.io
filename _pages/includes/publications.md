<h2 id="publications">{% include icon.html name="file-lines" %} Publications</h2>

**A complete list of my publications is available on [Google Scholar](https://scholar.google.com/citations?user=Dc6Eq1cAAAAJ&hl=en)**.
<div class="custom-divider"></div>

<div markdown="0">
{% assign prev_type = nil %}

{% for pub in site.data.publications %}
  {% if pub.type != prev_type %}
    {% if prev_type == "simple" %}
      </ul>
    {% endif %}
    {% if pub.type == "simple" %}
      <ul>
    {% endif %}
  {% endif %}
  {% if pub.type == "simple" %}
    {% include publication-simple.html pub=pub %}
  {% else %}
    {% assign border_top = (prev_type == "simple") %}
    {% include publication-featured.html pub=pub is_last=forloop.last border_top=border_top %}
  {% endif %}
  {% if pub.type == "simple" and forloop.last %}
    </ul>
  {% endif %}
  {% assign prev_type = pub.type %}
{% endfor %}
</div>