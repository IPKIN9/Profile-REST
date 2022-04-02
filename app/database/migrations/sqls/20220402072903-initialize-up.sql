CREATE TABLE province (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	province_name VARCHAR(50) NOT NULL,
	created_at DATE NOT NULL,
    updated_at DATE
);

CREATE TABLE city (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	city_name VARCHAR(50) NOT NULL,
    province_id BIGINT REFERENCES province(id) NOT NULL,
	created_at DATE NOT NULL,
    updated_at DATE
);

CREATE TABLE position (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	position_name VARCHAR(50) NOT NULL,
	created_at DATE NOT NULL,
    updated_at DATE
);

CREATE TABLE bank_account (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	bank_name VARCHAR(50) NOT NULL,
	created_at DATE NOT NULL,
    updated_at DATE
);

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    UNIQUE(email),
    city_id BIGINT REFERENCES city(id) NOT NULL,
    street_address VARCHAR(50) NOT NULL,
    zip_code VARCHAR(50) NOT NULL,
    ktp_number VARCHAR(50) NOT NULL,
    ktp_scan_path VARCHAR(255) NOT NULL,
    position_id BIGINT REFERENCES position(id) NOT NULL,
    bank_account BIGINT REFERENCES bank_account(id) NOT NULL,
    bank_account_number VARCHAR(50) NOT NULL,
	created_at DATE NOT NULL,
    updated_at DATE
);