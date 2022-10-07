import React from "react";
import { useState, useEffect } from "react";
import Data from "./sample.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TopNav from "../TopNav";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(Data.entries);
  // the same comment as for seriesData()
  function filterMovies() {
    const arr = Data.entries.filter((item) => {
      return item.programType === "movie";
    });
    return arr;
  }
  // the same comment as for useEffect in Series
  useEffect(() => {
    setList(filterMovies());
  }, []);
  // the same comment as for useEffect in Series
  useEffect(() => {
    const arr = filterMovies().filter((item) => {
      // this checking is not needed
      if (searchText != "") {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
        // item.programType === "movie"
      }

      return true;
    });
    setList(arr);
  }, [searchText]);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const arr = Data.entries.filter((item) => {
  //     if (searchText != "") {
  //       return item.title.includes(searchText) && item.programType === "movie";
  //     }

  //     return item.programType === "movie";
  //   });
  //   setList(arr);
  // }

  // should be wrapped into useCallback and moved out to custom hook
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <>
      <TopNav />
      <div>
        <form>
          <label>
            Name:
            <input type="text" value={searchText} onChange={handleChange} />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>

      <Row style={{ marginLeft: "10px" }}>
        {/* {(searchText!==""){

        }

        } */}
        {list.map((item) => {
          // key is missing. Please see the console and you will see a lot of errors
          return (
            <Col>
              {/*The Card should be moved to separate component. It will allow you to reuse it in Series and here*/}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.images["Poster Art"].url} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
