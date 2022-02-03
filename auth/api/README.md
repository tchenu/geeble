# API

The API will be here.

Refer to the [Getting Started Guide](https://api-platform.com/docs/distribution) for more information.

```bash 
  cd auth
  docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build -d

  docker-compose -f docker-compose.yml -f docker-compose.override.yml composer install

  docker-compose exec php sh -c '
    set -e
    apk add openssl
    php bin/console lexik:jwt:generate-keypair
    setfacl -R -m u:www-data:rX -m u:"$(whoami)":rwX config/jwt
    setfacl -dR -m u:www-data:rX -m u:"$(whoami)":rwX config/jwt
  '

  docker-compose -f docker-compose.yml -f docker-compose.override.yml d:m:m
```

A default user has been created, test@test.fr with the password: testtest