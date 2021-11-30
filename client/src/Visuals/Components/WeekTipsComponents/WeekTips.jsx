import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
//import PaginationBtn from '../PaginationBtn';
import WeekTipsCard from './WeekTipsCard'
import {getAllTips} from '../../../Controllers/actions/constantInfoActions'

function WeekTips() {
    //let [tipPage, settipPage] = useState(1);
    const dispatch = useDispatch();
    const tipsStore = useSelector(state=>state.constantInfoReducer.tips);
    useEffect(()=>{
        dispatch(getAllTips());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //const numOfPages = Math.ceil(tipsStore.length/3)
    // const showPage = (tipsStore, tipPage)=>{
    //     const init = (tipPage-1)*3
    //     const end = tipPage*3
    //     return tipsStore.slice(init, end)
    // }

    // const dwPage = ()=>{
    //     (tipPage>0&&tipPage!==tipsStore.length) && settipPage(tipPage--)
    // }
    // const upPage = ()=>{
    //     (tipPage>0 && tipPage!==tipsStore.length) && settipPage(tipPage++)
    // }

    return (
        <div className="wrapper bg-component-week-tips cursor-pointer">
            <div className="wrapper bg-color-alt-a40">
                {/*
                <div className="wrapper">
                    <section>
                        <div className="text-center text-bold font-main font-color-light font-2x">
                            Tips de la Semana
                        </div>
                    </section>
                </div>
                */}
                <div 
                    data-uk-slideshow="autoplay:true; animation:slide; ratio: false"
                    className="wrapper position-relative"
                    tabIndex="-1"
                >
                    <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 60">
                        {
                            tipsStore && tipsStore.map(element => {
                                return <WeekTipsCard key={element._id} text={element.text} />
                            })
                        }             
                    </ul>
                    {/*
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover bg-t1" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
                    */}
                </div>
            </div>
        </div>
    )
}

export default WeekTips
