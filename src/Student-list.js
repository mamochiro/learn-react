import React from 'react'

const StudentList = () => {
  const data = [
    { id: 1, name: 'sarawut' },
    { id: 2, name: 'athenaa' },
    { id: 3, name: 'mark' },
    { id: 4, name: 'yuri' },
  ]

  const list = data.map(item => {
    return (
      <div key={item.id} className="col-sm-4 col-lg-3 mt-2">
        <div className="card">
          <div className="card-body">
            <dl className="row">
              <dt className="col-lg-6 col-sm-5 col-6">Id:</dt>
              <dd className="col-lg-6 col-sm-7 col-6">{item.id}</dd>
              <dt className="col-lg-6 col-sm-5 col-6">Name:</dt>
              <dd className="col-lg-6 col-sm-7 col-6">{item.name}</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  })
  return <div className="row">{list}</div>
}

export default StudentList
