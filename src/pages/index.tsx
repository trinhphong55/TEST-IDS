import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/countAction';
import { useTranslation } from 'react-i18next';
import { RootState } from '../redux/reducers/reducers'; // Đảm bảo bạn import đúng kiểu RootState

function HomePage() {
  const count = useSelector((state: RootState) => state.counter.count); // Sử dụng kiểu RootState
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:any) => {
    i18n.changeLanguage(lng);
  };

  return (
    // <div>
    //    <h1>{t('buttonLabel')}</h1>
    //    <button onClick={() => changeLanguage('en')}>English</button>
    //   <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    //   <h1>{t('counter')}: {count}</h1>
    //   <button onClick={() => dispatch(increment())}>{t('increment')}</button>
    //   <button onClick={() => dispatch(decrement())}>{t('decrement')}</button>
    // </div>
    <>
     <a href='manage/user'>click me</a>
    </>
  );
}

export default HomePage;
