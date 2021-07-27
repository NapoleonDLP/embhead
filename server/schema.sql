DROP DATABASE IF EXISTS embhead;

CREATE DATABASE embhead;

\c embhead;

CREATE TABLE IF NOT EXISTS Questions (
  id SERIAL PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL
);

-- CREATE TABLE IF NOT EXISTS Users (

-- );
