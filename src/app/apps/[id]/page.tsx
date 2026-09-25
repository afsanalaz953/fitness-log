
import SingleCard from '@/components/SingleCard';

type TAppDetailsProps ={
    params:{
        id:string;
    }
}

const DetailsPage = async({params}: TAppDetailsProps) => {
    const {id} = await params;
   console.log(id, 'singleId')
    const res = await fetch(` https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await res.json();
    console.log (data, 'singlefetchdata')
    return (
        <div>
           <SingleCard data = {data} /> 
        </div>
    );
};

export default DetailsPage;
