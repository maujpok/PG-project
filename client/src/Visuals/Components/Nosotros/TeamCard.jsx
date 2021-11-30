import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function TeamCard(props) {
    return (
        <div className='w-80'>
            <Card className='bg-gray-100 shadow-xl my-6'>
                <div className=''>
                    <div className='w-56'>
                        <CardImage
                            src={props.img}
                            alt="Card Image"
                        />
                    </div>

                    <div className='h-36'>
                        <CardBody>
                            <H6 color="gray">{props.title}</H6>
                            <Paragraph color="gray">
                                {props.text}
                            </Paragraph>
                        </CardBody>
                    </div>

                    <CardFooter>
                        <Button 
                                className='action action-main-reverse'
                                color="white" 
                                size="lg" 
                                ripple="light"
                                name={props.name}
                                onClick={props.onClick}>
                            Ver Mas
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}