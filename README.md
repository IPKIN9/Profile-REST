# Read this documentation
</br>
Here is the documentation of how to run this application
</br>
## System requirements

Node version V16.14.2
Npm version 8.5.0

## How to create table with migration

```bash
npm run migrate:up
```

## Run your server

```bash
npm run serve
```

## Endpoint testing

Please use postman or the like

To "GET" all province Data

```bash
http://localhost:3000/province
```

To "GET" by Id province Data put your id after '/'

```bash
http://localhost:3000/province/1
```

POST data
{
    "province_name":"your province"
}

```bash
http://localhost:3000/province
```

PATCH data
do not forget replace your current id after "/"
{
    "province_name":"your province"
}

```bash
http://localhost:3000/province/1
```

DELETE data
do not forget replace your current id after "/"

```bash
http://localhost:3000/province/1
```
