module Jekyll
  # A coach tag with its own styling.
  # Content is rendered as Markdown.
  class CoachTag < Liquid::Block
    def render(context)
      site = context.registers[:site]
      converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
      <<~COACH_ELEMENT
        <div class="coach-notice">
          <div><strong title="Ask the coach for a explanation about this step">Help from the coach</strong></div>
          #{converter.convert(super)}
        </div>
      COACH_ELEMENT
    end
  end
end

Liquid::Template.register_tag("coach", Jekyll::CoachTag)
