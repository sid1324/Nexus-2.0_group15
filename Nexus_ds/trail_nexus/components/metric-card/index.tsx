import React from 'react';
import { Card,CardBody, CardFooter } from '@nexus-ds/react';

interface MetricCardProps {
  value: number;
  footer: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, footer }) => {
  return (
    <Card
    isHoverable={true}
    isFooterBlurred
    className='mt-10 mb-10 w-[20%] h-[20%] flex flex-col justify-center items-center'
    aria-label='Metric Card'
    >
      <CardBody className="text-3xl font-bold text-center">
        {value}
      </CardBody>
      <CardFooter className='justify-center' >
        <p className="text-tiny font-semibold  text-white/80">{footer}</p>
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
