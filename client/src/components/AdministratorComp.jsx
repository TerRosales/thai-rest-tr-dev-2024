import React from "react";
import "../global.css";
import { TextInput, Textarea, Select, Button, Label } from "flowbite-react";

const AdministratorComp = () => {
  return (
    <div className="max-w-7xl flex mx-auto justify-center gradient-flip rounded-2xl py-10 mb-16">
      <section className="gradient w-[60%] p-5">
        {" "}
        <h3 className="titleItem my-2 text-center underline decoration-red-600 underline-offset-2">
          Add Menu Item
        </h3>
        <form action="" className="flex flex-col gap-2">
          <Label>Name: </Label>
          <TextInput type="text" id="name" name="name" />
          <Label>Course: </Label>
          <Select name="course" id="course">
            <option>Thailand Course</option>
            <option>Filipino Course</option>
            <option>Beverages</option>
            <option>Appetizers</option>
            <option>Desserts</option>
          </Select>
          <Label>Price: </Label>
          <TextInput type="number" maxLength="2" />
          <Label>Ingredients: </Label>
          <Textarea type="text" rows={5} />
          <Label>Image: </Label>
          <TextInput type="file" />
          <Button
            gradientDuoTone="pinkToOrange"
            className="w-[95] h-[43px] border-[0.5px] border-yellow-200 mt-2 mb-4"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default AdministratorComp;
