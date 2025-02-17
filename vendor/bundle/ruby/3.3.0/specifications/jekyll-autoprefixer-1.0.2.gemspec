# -*- encoding: utf-8 -*-
# stub: jekyll-autoprefixer 1.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-autoprefixer".freeze
  s.version = "1.0.2".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Vincent Wochnik".freeze]
  s.date = "2019-03-11"
  s.description = "Autoprefixer integration for Jekyll".freeze
  s.email = ["v.wochnik@gmail.com".freeze]
  s.homepage = "https://github.com/vwochnik/jekyll-autoprefixer".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3".freeze)
  s.rubygems_version = "2.7.6".freeze
  s.summary = "This plugin provides simple autoprefixer support for Jekyll.".freeze

  s.installed_by_version = "3.5.22".freeze

  s.specification_version = 4

  s.add_runtime_dependency(%q<autoprefixer-rails>.freeze, ["~> 9.3".freeze])
  s.add_development_dependency(%q<jekyll>.freeze, ["~> 3.8".freeze])
  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.6".freeze])
end
