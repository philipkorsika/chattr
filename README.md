webchat
=======

minimalistic web chat built with:
 - bottle.py
 - gevent

Install
-------

Requires Python and Python dev-tools, and [pip installed](http://python-packaging-user-guide.readthedocs.org/en/latest/installing/#install-pip-setuptools-and-wheel) 

Create a virtual env, install bottle and gevent, then start the server.

```bash
$ python -V
=> Python 3.12.3
$ python -m venv ./venv
$ source ./venv/bin/activate
(venv) $ pip install bottle gevent
(venv) $ python server.py
```

Browse to `http://localhost:9092`

For future runs:

```bash
$ source ./venv/bin/activate
(venv) $ python server.py
```
