const request_url = require("supertest")("https://restful-booker.herokuapp.com");
const assert = require("chai").expect;


it("Create new booking", async function () {
  const response = await request_url
  .post("/booking")
  .set('Accept','application/json')
  .set('Content-Type', 'application/json')
  .send({
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
    },
    additionalneeds: "Breakfast"
})
  assert(response.statusCode).to.eql(200);
});

it("Get list of booking ids", async function () {

  const response = await request_url
    .get("/booking")
    .send();
  assert(response.statusCode).to.eql(200);
});

it("Get details booking by id", async function () {

  const response = await request_url
    .get("/booking/1")
    .set('Accept','application/json')
    .set('Content-Type', 'application/json')
    .send();
  assert(response.statusCode).to.eql(200);
});


it("booking id not found", async function () {

  const response = await request_url
    .get("/booking/123333")
    .send();
  assert(response.statusCode).to.eql(404);
});