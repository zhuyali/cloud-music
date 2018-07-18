import React from 'react';

import './Ranklist.css';

class Ranklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ranklist-wrapper'>
        {
          this.props.list.map((item, index) => {
            return (
              <div className={`ranklist-item`}>
                <img className='ranklist-item-banner' src={item.img} />
                <div className='ranklist-item-content'>
                  <ol className='ranklist-item-top3'>
                    {
                      item.top3.map((top, index) => {
                        return <li className="ranklist-top3-item overflow">{`${index + 1}. ${top.title} - ${top.singer} - ${top.album}`}</li>
                      })
                    }
                  </ol>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Ranklist;