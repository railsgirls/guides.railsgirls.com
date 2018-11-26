FROM ruby:2.5

LABEL maintainer="Rails Girls <contact@railsgirls.com>"

WORKDIR /site

RUN gem install jekyll

COPY Gemfile Gemfile.lock ./

RUN bundle install

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "server", "--watch", "-H", "0.0.0.0"]
