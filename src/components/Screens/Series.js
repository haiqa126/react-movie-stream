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
  //Please never ever use null, undefined, booleans as strings
  const [year, setYear] = useState("null");
  const [series, setSeries] = useState([]);

  //this function is not dependent on any props. So it should be moved out of body of the component to separate js file,
  //as for now it's redeclared for every rerendering
  //Also it's better to use arrow functions as it's safer if you will decide to use "this"
  function seriesData() {
    return data.entries.filter((item) => {
      return item.programType === "series";
    });
  }

  // should be wrapped into useCallback and moved out to custom hook
  function handleChange(fYear) {
    console.log("the value passed by select");
    console.log(fYear);
    setYear(fYear);
  }

  //Please try to avoid using useEffect as much as possible, as its execution can be unpredictable.
  //In your case you can for initial series in useState:
  //const [series, setSeries] = useState(() => {... some logic that will return formed array ...});
  useEffect(() => {
    //console.log("This is use effec");
    //console.log(year);
    filterDataSeries();
  }, [year]);

  // should be wrapped into useCallback and moved out to custom hook
  function filterDataSeries() {
    //takes out first 20 and sorts them alpha numerically

    // please use const as it's not going to be changed
    let arr = seriesData()
      .filter((item) => {
        if (year != "null") {
          // this condition is more than enough. You do not need to check year to null or something
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

  // should be wrapped into useMemo and moved out to custom hook
  function dropDownFilterData() {
    //an array is returned that contains only release year

    //Please use const
    let arr = seriesData().map((item) => {
      return item.releaseYear;
    });

    // I have not got this logic and what it's doing
    let brr = arr.filter((item, pos) => {
      //finding unique
      return arr.indexOf(item) === pos;
    });

    return brr.sort();
  }

  return (
    <>
      {/*You're repeating navbar component in each route instead of putting it at once for whole website */}
      <TopNav />
      {/*The container should wrap main content of each page without repeating it in each component*/}
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
                // key is missing. Please see the console and you will see a lot of errors
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
                        {/*it does nothing*/}
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
