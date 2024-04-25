import React from 'react'

function WorkItem() {

  const workItems = [
    {
      id: 1,
      date: '2024-04-24',
      workType: 'Development',
      description: 'Implementing feature X',
      status: 'In Progress',
      owner: 'John Doe'
    },
    {
      id: 2,
      date: '2024-04-25',
      workType: 'Testing',
      description: 'Testing feature Y',
      status: 'Pending',
      owner: 'Jane Smith'
    }
    // Add more work items as needed
  ];
  return (
    <div className="work-item-table-container">
      <table className="work-item-table">
        <thead>
          <tr>
            <th> Work Item ID</th>
            <th>Work Item Date</th>
            <th>Work Item Type</th>
            <th>Work Item Description</th>
            <th>Status</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {workItems.map((item, index) => (
            <tr key={index} className="table-row">
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.workType}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>{item.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkItem