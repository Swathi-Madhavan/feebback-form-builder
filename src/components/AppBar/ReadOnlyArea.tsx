import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandIcon from "../../assets/icons/ExpandIcon";
import ExpandMoreDownIcon from "../../assets/icons/ExpandMoreDownIcon";

function ReadOnlyArea() {
  return (
    <Box
      sx={{
        width: "1005px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          margin: "10px 10px 10px 10px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "300px",
            letterSpacing: "0.15px",
            lineHeight: "25.06px",
            color: "#2e2e2e",
            fontSize: "14px",
            margin: "0px 150px 0px 582px",
          }}
        >
          Page URL contains example.com/about
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "297px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto-bold",
                fontWeight: "700px",
                fontSize: "64px",
                lineHeight: "114.56px",
                letterSpacing: "0.15px",
                textAlign: "center",
                color: "#010101",
              }}
            >
              40
            </Typography>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: "400px",
                fontSize: "24px",
                lineHeight: "42.96px",
                letterSpacing: "0.15px",
                textAlign: "center",
                color: "#676767",
              }}
            >
              VIEWS
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "297px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto-bold",
                fontWeight: "700px",
                fontSize: "64px",
                lineHeight: "114.56px",
                letterSpacing: "0.15px",
                textAlign: "center",
                color: "#010101",
              }}
            >
              3
            </Typography>
            <span
              style={{
                fontFamily: "Roboto",
                fontWeight: "400px",
                fontSize: "24px",
                lineHeight: "42.96px",
                letterSpacing: "0.15px",
                textAlign: "center",
                color: "#676767",
              }}
            >
              SUBMITTED
            </span>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: "17px",
            alignItems: "center",
            gap: "150px",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "1.79",
              letterSpacing: "0.15px",
              textAlign: "center",
              color: "#2e2e2e",
            }}
          >
            Date: 23/08/2024
          </span>
          <span
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "1.79",
              letterSpacing: "0.15px",
              textAlign: "center",
              color: "#2e2e2e",
            }}
          >
            Time: 12:00pm
          </span>
          <span
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "500px",
              lineHeight: "1.79",
              letterSpacing: "0.15px",
              textAlign: "center",
              color: "#000",
            }}
          >
            Feedback List
          </span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "8px 16px 16px",
            boxShadow: " 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <Typography
              sx={{
                color: "rgba(37, 74, 168, 0.87)",
                fontFamily: "Roboto",
                lineHeight: "1.5",
                letterSpacing: "0.15px",
              }}
            >
              FeedBack 1
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  letterSpacing: "0.15px",
                  color: "#000",
                }}
              >
                10/08/2024
              </Typography>
              <ExpandIcon />
            </Box>
          </div>
          <Typography
            sx={{
              marginTop: "16px",
              fontFamily: "Roboto",
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#232323",
            }}
          >
            Would you like to add a comment?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "rgba(35, 35, 35, 0.62)",
            }}
          >
            The website is user-friendly and easy to navigate. I found exactly
            what I was looking for without any hassle. The checkout process was
            quick, and I appreciate the seamless online shopping experience.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#232323",
            }}
          >
            How likely is it that you will recommend us to your family and
            friends?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "rgba(35, 35, 35, 0.62)",
            }}
          >
            5
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#232323",
            }}
          >
            Give a star rating for the website.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "rgba(35, 35, 35, 0.62)",
            }}
          >
            2
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#232323",
            }}
          >
            Do you have any suggestions to improve our website?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",

              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "rgba(35, 35, 35, 0.62)",
            }}
          >
            The website is user-friendly and easy to navigate. I found exactly
            what I was looking for without any hassle. The checkout process was
            quick, and I appreciate the seamless online shopping experience.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#232323",
            }}
          >
            Multiple choice - 1 answer
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "rgba(35, 35, 35, 0.62)",
            }}
          >
            Radio 1
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#232323",
            }}
          >
            Pick a subject and provide your feedback:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "rgba(35, 35, 35, 0.62)",
            }}
          >
            Bug
          </Typography>
     
     
        </Box>
        <Box>
                 <div style={{
            marginTop: "17px"
          }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    rgba: "(37, 74, 168, 0.87)"
                }}
              >
                FeedBack 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
          <div style={{
            marginTop: "17px"
          }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreDownIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    rgba: "(37, 74, 168, 0.87)"
                }}
              >
                FeedBack 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
          </Box>
      </Box>
    </Box>
  );
}

export default ReadOnlyArea;
