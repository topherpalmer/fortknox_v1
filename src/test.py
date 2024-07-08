def embed_url():
  data = request.get_json()

  headers = {
    'Authorization': "Bearer retool_01hz5h90k9vxt4pq52epstwvzr",
    'Content-type': 'application/json',
  }
  body = {
    "landingPageUuid": "6b79c648-0bce-11ef-9ee7-8b6ef326de56",
    "groupIds": [
      3117369
    ],
    "externalIdentifier": "2db6bd4c-84e8-43ee-ad38-4e06ed2614e8",
    "userInfo": {
      "firstName": "Chris",
      "lastName": "Palmer",
      "email": "topherpalmer@gmail.com"
    }
  }

  options = {
    'method': 'POST',
    'headers': headers,
    'body': json.dumps(body),
  }

  resp = requests.post("https://retooldev.myfortknox.co/api/embed-url/external-user", **options)
  if resp.ok:
    return resp.json()
  else:
    # Handle error
    pass
  
