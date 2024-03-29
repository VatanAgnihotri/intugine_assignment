import React from "react";
import {
  CardContentContainer,
  CardWrapper,
  CardTypographyContainer,
  CardProgressBar,
  DividerDiv,
  Span,
} from "./Card.style";
import { BoxWrapper } from "../Common/Box/Box.style";
import { Stack } from "@mui/material";

function Card(props) {
  const { setTableType } = props;

  return (
    <>
      {props.statusCard ? (
        <CardWrapper width={props.width} padding="0px" height="124px">
          <Stack direction="row" spacing={0}>
            <CardContentContainer
              onClick={(e) => {
                e.stopPropagation();
                setTableType("delayed");
              }}
              backgroundColor={props.boxOneColor}
              width={props?.cardContainerWidth}
              sx={{
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardTypographyContainer {...props.titleStyle} gutterBottom>
                {props.title}
              </CardTypographyContainer>
              <CardTypographyContainer
                marginTop="20px"
                {...props.countStyle}
                variant="body2"
              >
                {props.number}
                <br />
              </CardTypographyContainer>
            </CardContentContainer>
            <CardContentContainer
              onClick={(e) => {
                e.stopPropagation();
                setTableType("transit");
              }}
              sx={{
                ":hover": {
                  boxShadow: 20,
                },
              }}
              width="174px"
              border="1px solid #E0E0E0"
            >
              <CardTypographyContainer
                {...props.titleStyle}
                color="#666666"
                gutterBottom
              >
                {props.boxTwoTitle}
              </CardTypographyContainer>
              <CardTypographyContainer
                marginTop="20px"
                {...props.countStyle}
                variant="body2"
                marginLeft="-62px"
              >
                {props.boxTwoNumber}
                <Span
                  display="inline-block"
                  width="31px"
                  padding="4px"
                  backgroundColor="#D7E3FE"
                  borderRadius="4px"
                  gap="4px"
                  position="relative"
                  left="50px"
                  bottom="4px"
                  fontFamily="Source Sans Pro"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="16px"
                  textAlign="center"
                >
                  {props?.boxTwoPercentage}%
                </Span>
                <br />
              </CardTypographyContainer>
            </CardContentContainer>
            <CardContentContainer
              onClick={(e) => {
                e.stopPropagation();
                setTableType("delivered");
              }}
              sx={{
                ":hover": {
                  boxShadow: 20,
                },
              }}
              width="174px"
              border="1px solid #E0E0E0"
            >
              <CardTypographyContainer
                {...props.titleStyle}
                color="#666666"
                gutterBottom
              >
                {props.boxThreeTitle}
              </CardTypographyContainer>
              <CardTypographyContainer
                marginTop="20px"
                {...props.countStyle}
                variant="body2"
                marginLeft="-68px"
              >
                {props.boxThreeNumber}
                <Span
                  display="inline-block"
                  width="31px"
                  padding="4px"
                  backgroundColor="#D7E3FE"
                  borderRadius="4px"
                  gap="4px"
                  position="relative"
                  left="50px"
                  bottom="4px"
                  fontFamily="Source Sans Pro"
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="16px"
                  textAlign="center"
                >
                  {props?.boxThreePercentage}%
                </Span>
                <br />
              </CardTypographyContainer>
            </CardContentContainer>
            <CardContentContainer>Item 3</CardContentContainer>
          </Stack>
        </CardWrapper>
      ) : (
        <CardWrapper
          onClick={(e) => {
            e.stopPropagation();
            setTableType(props.title === "Total trips" ? "all" : "delivered");
          }}
          justifyContent={props?.justifyContent}
          display={props?.display}
          width={props.width}
          sx={{
            ":hover": {
              boxShadow: 20,
            },
          }}
        >
          <Stack wid direction="row" width="100%" spacing={18}>
            <CardContentContainer width={props?.cardContainerWidth}>
              <CardTypographyContainer {...props.titleStyle} gutterBottom>
                {props.title}
              </CardTypographyContainer>
              <CardTypographyContainer
                marginTop="20px"
                {...props.countStyle}
                variant="body2"
              >
                {props.number}
                <br />
              </CardTypographyContainer>
            </CardContentContainer>
            {props?.progressBar && (
              <BoxWrapper position="relative" display="inline-flex">
                <DividerDiv />
                <BoxWrapper
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  marginLeft="10px"
                  position="absolute"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <BoxWrapper margin="0 0 0 -10px">
                    <CardProgressBar
                      variant="determinate"
                      color="success"
                      value={props?.percentage}
                    />
                    <CardTypographyContainer
                      zIndex={4}
                      bottom="38px"
                      left="12px"
                      position="relative"
                      component="div"
                      color="text.secondary"
                      fontFamily="Poppins"
                      fontSize="12px"
                      fontWeight="600"
                      lineHeight="24px"
                      letterSpacing="0px"
                      textAlign="center"
                    >
                      {`${props?.percentage}%`}
                    </CardTypographyContainer>
                  </BoxWrapper>
                  <CardTypographyContainer
                    position="relative"
                    top="35px"
                    zIndex={5}
                    component="div"
                    variant="body1"
                    fontFamily="Source Sans Pro"
                    fontSize="14px"
                    fontWeight="400"
                    line-height="20px"
                    letterSpacing="0px"
                    textAlign="center"
                    color="#666666"
                  >
                    Ontime:
                    <Span>{props?.onTime}</Span>
                  </CardTypographyContainer>
                </BoxWrapper>
              </BoxWrapper>
            )}
          </Stack>
        </CardWrapper>
      )}
    </>
  );
}

export default Card;
