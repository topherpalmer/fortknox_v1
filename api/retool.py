@app.route('/embedUrl', methods=['POST'])
def embed_url():
  data = request.get_json()
  app_uuid = app_name_to_uuid[data['retoolAppName']]

  # userJwt is an example variable that the frontend could pass to your backend,
  # for use in a Retool application. Not required, used for demo purposes.
  token, first_name, last_name, email = jwt.decode(data['userJwt'], secret_key)

  headers = {
    // The RETOOL_API_KEY is the token generated in the first step
    'Authorization': 'Bearer retool_01hz5h90k9vxt4pq52epstwvzr',
    'Content-type': 'application/json',
  }
  body = {
    'landingPageUuid': 'a0a66088-0bce-11ef-b20a-e31e0df5da24',
    'groupIds': [3117369],
    'externalIdentifier': '88d82974-543c-4fb1-83e8-740c8977f9d7',
    'userInfo': {
      'firstName': 'Chris',
      'lastName': 'Palmer',
      'email': 'chrispalmer@undefeatedsoftware.com',
    },
    'metadata': {
      'storeId': 5
    }
  }

  options = {
    'method': 'POST',
    'headers': headers,
    'body': json.dumps(body),
  }

  resp = requests.post(f"https://{os.environ['RETOOL_URL']}/api/embed-url/external-user", **options)
  if resp.ok:
    return resp.json()
  else:
    # Handle error
    pass