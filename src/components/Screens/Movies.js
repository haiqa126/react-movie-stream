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

  function filterMovies() {
    const arr = Data.entries.filter((item) => {
      return item.programType === "movie";
    });
    return arr;
  }
  useEffect(() => {
    setList(filterMovies());
  }, []);

  useEffect(() => {
    const arr = filterMovies().filter((item) => {
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
          return (
            <Col>
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
