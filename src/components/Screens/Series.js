import React from "react";
import { useState, useEffect } from "react";
import data from "./sample.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNav from "../TopNav";
import Dropdown from "../Filters/Dopdown";

export default function Series() {
  const [year, setYear] = useState("null");
  const [series, setSeries] = useState([]);

  function seriesData() {
    return data.entries.filter((item) => {
      return item.programType === "series";
    });
  }

  function handleChange(fYear) {
    console.log("the value passed by select");
    console.log(fYear);
    setYear(fYear);
  }

  useEffect(() => {
    //console.log("This is use effec");
    //console.log(year);
    filterDataSeries();
  }, [year]);

  function filterDataSeries() {
    //takes out first 20 and sorts them alpha numerically
    let arr = seriesData()
      .filter((item) => {
        if (year != "null") {
          //console.log(year);
          return item.releaseYear == year;
        }
        console.log(year);
        return true;
      })
      .slice(0, 22)
      .sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
      });

    setSeries(arr);
  }

  function dropDownFilterData() {
    //an array is returned that contains only release year
    let arr = seriesData().map((item) => {
      return item.releaseYear;
    });

    let brr = arr.filter((item, pos) => {
      //finding unique
      return arr.indexOf(item) === pos;
    });

    return brr.sort();
  }

  return (
    <>
      <TopNav />
      <Container>
        <Row>
          {
            <Dropdown
              data={dropDownFilterData()}
              onSelectChange={handleChange}
            />
          }

          {series &&
            series.map((item) => {
              return (
                <>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={item.images["Poster Art"].url}
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
