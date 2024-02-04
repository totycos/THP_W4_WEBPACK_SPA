import './index.scss'

const ShowMoreBtn = ({ onClick }) => {

    return (
        <div className='showMoreContainer' onClick={ onClick }>
            <button className='showMoreContainer__btn'>Show more</button>
        </div>
    );
};


export default ShowMoreBtn;
