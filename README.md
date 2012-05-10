# rAppid.js-server - a nodejs render server for rAppid.js application

## Usage
Usage: node ./bin/rappidjssrv mainClass.xml

Options:
  --dir                 Application directory (public)
  --port, -p            Port ot listen                       [default: 80]
  --config              Config.json file                     [default: "config.json"]
  --html                html start file                      [default: "index.html"]
  -o                    A option to start the application
  --applicationUrl, -u  base Url used for relative requests
  --staticFiles         base Url used for relative requests  [boolean]