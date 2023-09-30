const Menu = ({data}) =>
   <div className='pl-3'>
      {data.map((item, i)=> 
         <React.Fragment key={i}>
            <h1 className='font-bold mt-3 text-2xl'>How To Prepare {item.name}</h1>
            <Recipes {...item}/>
         </React.Fragment>
      )}
   </div>


export default Menu