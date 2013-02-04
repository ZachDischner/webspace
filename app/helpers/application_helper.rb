module ApplicationHelper

  # Returns the full title on a per-page basis:
  def full_header(page_title)
    base_title = "Kevin's Tiny Webspace"
    if page_title.empty?
      base_title
    else
      '#{base_title} | #{page_title}'
    end
  end
end
