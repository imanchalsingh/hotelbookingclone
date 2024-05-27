import { useState } from "react";
import { hotels } from "../bookingdata";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Dialog, ListItem, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
export default function HotelContent(props: any) {
  const [data] = useState(hotels);
  const [openDetails, setOpenDetails] = useState(false);
  const [currentHotelDetails, setCurrentHotelDetails] = useState<any>(null);
  const open = () => {
    setOpenDetails(true);
  };
  const close = () => {
    setOpenDetails(false);
  };
  const renderHotelDetails = (details: any) => {
    return (
      <>
        <div>
          <h1 style={{ fontSize: "50px" }}>{details.name}</h1>
          <h4>{details.address}</h4>
          <div className="card mb-3" style={{ border: "none", width: "500px" }}>
            <div className="card-header">{details.description}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{details.amenities}</p>
                <div style={{ display: "flex" }}>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      defaultValue={details.rating}
                      precision={0.2}
                    />
                  </Stack>
                  <p>{details.rating}</p>
                  <p
                    style={{
                      color: "#0066ff",
                      marginTop: "-3px",
                      marginLeft: "10px",
                    }}
                  >
                    ({Math.floor(Math.random() * 50000)}
                    )<PersonIcon />
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <h4>Price Per Night- </h4>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "green",
                marginLeft: "10px",
              }}
            >
              {details.price_per_night * 83}
              <CurrencyRupeeIcon />
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentHotelDetails(details);
              open();
            }}
            className="btn btn-danger"
            style={{
              borderRadius: "50px",
              width: "25%",
              marginTop: "20px",
              boxShadow: "0px 0px 5px 0px gray",
            }}
          >
            Book now
          </button>
        </div>
      </>
    );
  };
  const renderHotelImage = (details: any) => {
    return (
      <>
        <div>
          <img
            style={{
              width: "450px",
              height: "400px",

              borderRadius: "5px",
              boxShadow: "0px 0px 10px 0px gray",
            }}
            src={details.image_url}
            alt=""
          />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg1">
        {data.map((details, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "100vh",
                paddingTop: "8%",
              }}
            >
              {index % 2 === 0 && (
                <>
                  {renderHotelImage(details)}
                  {renderHotelDetails(details)}
                </>
              )}
              {index % 2 !== 0 && (
                <>
                  {renderHotelDetails(details)}
                  {renderHotelImage(details)}
                </>
              )}
            </div>
          );
        })}
        {openDetails && currentHotelDetails && (
          <Dialog open={openDetails}>
            <ListItem
              component="div"
              onClick={close}
              style={{ display: "flex", justifyContent: "right" }}
            >
              <CancelIcon />
            </ListItem>
            <Typography
              variant="h3"
              sx={{ color: "black", textAlign: "center" }}
            >
              {currentHotelDetails.name}
            </Typography>
            <div style={{ padding: "40px" }}>
              <form>
                <TextField
                  autoComplete="off"
                  required
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Enter name"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoComplete="off"
                  required
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Address"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <div style={{ display: "flex", marginTop: "20px" }}>
                  <p style={{ marginRight: "10px",marginTop:"5px" }}>Today: </p>
                  <input type="date" required />
                  <p style={{ marginLeft: "40px", marginRight: "10px",marginTop:"5px" }}>
                    Booking Date:{" "}
                  </p>
                  <input type="date" required />
                </div>
                <div>
                  <TextField
                    autoComplete="off"
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Account no."
                    type="number"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    autoComplete="off"
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Payment"
                    type="number"
                    variant="standard"
                  />
                  <TextField
                    style={{ marginLeft: "40px" }}
                    autoComplete="off"
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Password"
                    type="password"
                    variant="standard"
                  />
                </div>               
                <button
                  style={{
                    textAlign: "center",
                    borderRadius: "50px",
                    marginLeft: "35%",
                    width: "25%",
                    height: "40px",
                    marginTop: "20px",
                    boxShadow: "0px 0px 5px 0px gray",
                    backgroundColor: "#4286BD",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Book
                </button>
              </form>
            </div>
          </Dialog>
        )}
      </div>
    </>
  );
}
