import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import './App.css';

export default function Search(props) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const [sn, setsn] = useState("");
  const [sa, setsa] = useState(0);
  const [sg, setsg] = useState("");
  const [se, setse] = useState("");
  const [found2, setfound2] = useState(0);
  const [found, setfound] = useState(0);
  const [searchreg, setsearchreg] = useState(0);

  const handleSearch = (data) => {
    props.onfetch();

    let i;
    for (i = 0; i < props.items.length; i++) {
      if (props.items[i].regno === parseInt(data.searchreg)) {
        setsn(props.items[i].name);
        setsa(props.items[i].age);
        setsg(props.items[i].gender);
        setse(props.items[i].email);
        setfound(1);
        props.onfound([data.searchreg, props.items[i].name, props.items[i].age, props.items[i].gender, props.items[i].email]);
        break;
      }
    }

    if (i === props.items.length) {
      setfound2(1);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearch)}>
        <label>Enter regno to {props.name}</label>
        <input
          type="number"
          {...register("searchreg", {
            required: "Regno is required",
            min: { value: 1, message: "Regno must be a positive number" }
          })}
          value={searchreg}
          onChange={(e) => { setfound(0); setfound2(0); setsearchreg(e.target.value) }}
        />
       {errors.searchreg && <p className="error">{errors.searchreg.message}</p>}
        <button>{props.name}</button>
      </form>

      {found === 1 && props.name === "search" && <p>Search results found</p>}

      {found === 1 && props.name === "search" && (
        <>
          <p>{searchreg}</p>
          <p>{sn}</p>
          <p>{sa}</p>
          <p>{sg}</p>
          <p>{se}</p>
        </>
      )}

      {found === 1 && props.name === "update" && <p>Search results found</p>}

      {found2 === 1 && <p>Search results not found</p>}
      <br />
      <br />
    </div>
  );
}
