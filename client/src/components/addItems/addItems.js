//this page is follow up render for Add home button from homepage, state will dictate the questions being asked to the user
//  can use user params to provide responses to database for update,create
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import {add_asset, update_asset} from "?"
import { ADD_ITEM } from "../../utils/mutations";

const AddItem = () => {
  const [formState, setFormState] = useState({
    itemName: "",
    itemCategory: "",
    itemValue: 0,
    itemPurchaseDate: "",
  });
  const [addItem, { error, data }] = useMutation(ADD_ITEM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "itemValue") {
      setFormState({
        ...formState,
        [name]: parseInt(value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addItem({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <main className="login">
        <div className="">
          <div className="signup">
            <h4 className="title">Create Item</h4>
            <div className="card-body">
              {data ? (
                <p>Success!</p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Item Name"
                    name="itemName"
                    type="text"
                    value={formState.itemName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Item Category"
                    name="itemCategory"
                    type="text"
                    value={formState.itemCategory}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Value"
                    name="itemValue"
                    type="number"
                    value={formState.itemValue}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="Purchased Date"
                    name="itemPurchaseDate"
                    type="text"
                    value={formState.itemPurchaseDate}
                    onChange={handleChange}
                  />

                  <button
                    className="btn btn-block btn-primary"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AddItem;
