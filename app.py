from flask import Flask
from flask import render_template

app = Flask (__name__)

@app.route("/")
def home():
  return render_template("index.html")

@app.route("/services/")
def services():
  return render_template("services.html")

@app.route("/about/")
def about():
  return render_template("about.html")

@app.route("/contactus/")
def contactus():
  return render_template("contactus.html")

@app.route("/chart/")
def chart():
  return render_template("chart.html")
