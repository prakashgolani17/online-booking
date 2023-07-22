// import React from 'react'
import axios from "axios";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Input from "@mui/joy/Input";

// import FormControl from '@mui/material/FormControl';

import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, Formik } from "formik";
import { Form } from "reactstrap";

const Contact = () => {
  const { fname, lname } = useParams();
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const data = {
  //     name: "",
  //     email: ""
  // }

  // const [form, setForm] = useState({ name: "", email: "" })

  // const [inputText, setInputText] = useState("")

  // const handlechange = (e) => {
  // e.target.value()
  // setInputText({ ...inputText, [e.target.name]: e.target.value })
  // console.log(inputText);

  // setName({ ...name, [e.target.name]: e.target.value })
  // setEmail({ ...email, [e.target.name]: e.target.value })

  // }



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is a required field"),
    }),

    // onChange: (e) => {
    //   setName(e.target.value);
    //   setEmail(e.target.value);
    //   // console.log(name);
    //   // console.log(email);
    // },
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formik.values);
    // if (!name || !email) {
    // alert("fied are required");
    // } else {
    axios
      .post("https://jsonplaceholder.typicode.com/users", { name, email })
      .then((response) => {
        console.log(response);

      });

    // localStorage.setItem("name", name);
    // localStorage.setItem("email", email);
    // }
    // formik.values({});
    // setEmail("");  
    formik.resetForm({})
  }

  // console.log(formik.values);

  return (
    <div className="container">
      <Card
        sx={{
          maxWidth: 350,
          maxHeight: 600,
          margin: "40px 600px 50px 0px",
          opacity: "0.8",
        }}
      >
        <CardMedia
          sx={{ height: 200, color: "white" }}
          image="https://images.pexels.com/photos/12977998/pexels-photo-12977998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="green iguana"
        />
        <Formik>
          <Form onSubmit={handleSubmit}>
            <div className="component">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {fname} {lname} Form
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ color: "white", marginTop: "5px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  voluptatibus doloribus distinctio quos a, neque
                  necessitatibus, numquam hic consequatur totam, doloremque iure
                  deserunt. Totam, libero. <br /> <br />
                </Typography>

                <div style={{ margin: "10px" }}>
                  <Input
                    placeholder="Enter Name…"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    onChange={(e) => {
                      formik.handleChange(e)
                      setName(e.target.value)
                    }}


                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="error">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div style={{ margin: "10px" }}>
                  <Input
                    placeholder="Enter Email…"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e)
                      setEmail(e.target.value)
                    }
                    }
                    // onChange={formik.handleChange}
                    invalid={formik.touched && formik.errors}

                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Box sx={{ "& button": { m: 1 } }}>
                  <Button
                    className="btn"
                    variant="contained"
                    size="small"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {" "}
                    submit{" "}
                  </Button>
                </Box>
                <Button
                  className="btn"
                  variant="contained"
                  size="small"
                  onClick={() => {
                    history("/");
                  }}
                >
                  {" "}
                  Home{" "}
                </Button>
                <Button
                  className="btn"
                  variant="contained"
                  size="small"
                  onClick={() => {
                    history("/about");
                  }}
                >
                  {" "}
                  back{" "}
                </Button>
              </CardActions>
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

export default Contact;
