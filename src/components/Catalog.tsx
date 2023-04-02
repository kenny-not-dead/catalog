
import React, {  useState, useEffect } from 'react';
import classes from './Catalog.module.css'
import filterclass from './Filter.module.css'
import CatalogItem from './CatalogItem';
import Pagination from './UI/Pagination';
import Select from './UI/Select';
import SelectFilter from './UI/SelectFilter';
import FilterFor from './FilterFor';
import global from './css/global.module.css'


function Catalog (props:any) {

    const sortCatalog = (sort: string) => {
        setSelectedSort(sort)
        if (sort === 'name') {
          setValue([...catalog].sort( (a, b) => (a.name).localeCompare(b.name)))
        } else if (sort === 'price') {
          setValue([...catalog].sort( (a, b) => a.price - b.price))
        }
      }
      
      
      const [rotate, setRotate] = useState(true);
    
      let reverseCatalog = () =>{
        setValue([...catalog].reverse())
        setRotate(prevRotate => ! prevRotate)
      }
    
      let catalogs: Array<catalogType> = props.newData

      type catalogType = {
        url: string;
        name: string;
        type: string;
        size: string;
        code: string;
        producer: string;
        brand: string;
        comment: string;
        price: number;
        for: string[]
    }

  const [catalog, setValue] = useState(catalogs)
  
  const [selectedSort, setSelectedSort] = useState('')

    // panagination

    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(15)
  
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const current = catalog.slice(indexOfFirst, indexOfLast);
  
  
    const paginate = (pageNumbers:any) => setCurrentPage(pageNumbers)
  


    //filter

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10000)
    
    const minValue = (el:any) => {
      let newValue = el.target.value
      if (newValue < 0) {
        setMin(0)
      } else {
      setMin(newValue)
      }

        onFilter()
      };

      const maxValue = (el:any) => {
        let newValue = el.target.value
        if (newValue < 0) {
          setMax(min + 1)
        } else {
        setMax(newValue)
        }
        onFilter()
      };

      useEffect( () => {
        onFilter()
    }, [max])
    
    useEffect( () => {
      onFilter()
  }, [min])
  
      const [filterCompany, setfilterCompany] = useState<string[] > ([]);

      const changecheckbox = (el:any) => {
        el = el.target.name
        if (filterCompany.includes(el)) {
          setfilterCompany(filterCompany.filter(i => i != el))
        } else {
          filterCompany.push(el)
        }

        onFilter()
      } 

      const [filterFor, setfilterFor] = useState<string[] > ([]);


      const selecttype = (el:any) => {
        el = el.target.name
        if (filterFor.includes(el)) {
          setfilterFor(filterFor.filter(i => i != el))

        } else {
          filterFor.push(el)

        } 
        onFilter()
      }

      

      const onFilter = () => {
        let newValue = catalogs.filter( i => i.price >= min && i.price <= max )
        
        if (filterCompany.length !=0) {
          for(let x=0; x<filterCompany.length; x++ ) {
            setValue(newValue.filter( i => i.producer == filterCompany[x]))
          } 
        } else if (filterFor.length !=0) {
          for(let x=0; x<filterFor.length; x++ ) {
            setValue(newValue.filter( i => i.for.includes(filterFor[x])))
          }
        } else {setValue(newValue) }
      }

      
      useEffect( () => {
        onFilter()
    }, [filterCompany])

    
    useEffect( () => {
      onFilter()
  }, [filterFor])
  

    //cart

    const [cart, setCart] = useState<string[] > ([]);
    const [newprice, setNewPrice] = useState(0)

    const addcart = (id:any, price:any) => {
        setNewPrice(newprice + price)
      
        if (!cart.includes(id)) {
          cart.push(id)
          local()
          props.setCount(props.count + 1)
        }  
    }

    const local = () => {
      localStorage.setItem("id", JSON.stringify(cart));
      localStorage.setItem('total', JSON.stringify(newprice));
    }

    useEffect(() => {
      local()
    }, [cart, newprice]);


    let filterList = ['Уход за телом', 'Уход за руками', 'Уход за ногами', 'Уход за лицом', 'Уход за волосами', 'Средства для загара', 'Средства для бритья']
    

    return (
        <div className={global.container}> 
            <div className={classes.h2sort}>
                <h2>Косметика и гигиена</h2>
                <Select
                rotate = {rotate}
                value = {selectedSort}
                reverseCatalog = {reverseCatalog}
                onChange ={sortCatalog}
                option = {[
                    {value: 'name', name: 'Название'},
                    {value: 'price', name: 'Цена'}
                ]}/>
            </div>
                <div className={classes.filterforwrapper}>
                    {filterList.map( item => <FilterFor item ={item} filterFor = {filterFor} selecttype={selecttype}/>)}
                </div>
                
            <div className={classes.content}>
                  <div>
                        <h4 className={classes.h4}>Подбор по параметрам</h4>
                        <p>Цена</p>
                        <div className={filterclass.pricewrapper}>
                            <input name='setMin' className={filterclass.price} type="number" value= {min} onChange={minValue} />
                            <span> - </span>
                            <input name='setMax' className={filterclass.price} type="number" value={max} onChange={maxValue}/>
                        </div>
                        <SelectFilter changecheckbox={changecheckbox} name='Производитель'/>
                        <div className={classes.filterforwrapperdown}>
                            {filterList.map( item => <FilterFor item ={item} filterFor = {filterFor} selecttype={selecttype} down = 'down' />)}
                        </div>
                  </div>

                <div>
                    {current.length == 0 ? <h3 className={classes.notfind}>Ничего не найдено</h3> : '' }
                    <ul className={classes.cardwrapper}>
                        {current.map(card => <CatalogItem card = {card} key = {card.code} addcart={addcart}/>)}
                    </ul>
                        <Pagination perPage = {perPage} total = {catalog.length} paginate = {paginate} />
                </div>
            </div>  
        </div>
    )

}

export default Catalog



