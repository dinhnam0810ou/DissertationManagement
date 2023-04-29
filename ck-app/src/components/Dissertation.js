import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

const data = [
  {
    id: 1,
    name: "2e",
    score: 3,
    date: "june",
    council: { name: "hd1" },
    user: { name: "nv1" },
  },
  {
    id: 2,
    name: "2e",
    score: 3,
    date: "july",
    council: { name: "hd1" },
    user: { name: "nv1" },
  }
]

function Dissertation() {
  const [dissertationList, setDissertationList] = useState([]);

  useEffect(() => {
    UserService.getUsers().then((res) => {
      setDissertationList(res.data);
    })
  }, [])
const getData=()=>{
  let Datatuapi=data;
  setDissertationList(Datatuapi)
}
  return (
    <>
      {dissertationList[0] ?? 'dassdaasd'}
      <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Recent Salse</h6>
            <a href="/newdissertation">Thêm mới khóa luận</a>
          </div>
          <div class="table-responsive">
            <table class="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr class="text-dark">
                  <th scope="col"><input class="form-check-input" type="checkbox" /></th>
                  <th scope="col">Tên khóa luận</th>
                  <th scope="col">Sinh viên 1</th>
                  <th scope="col">Sinh viên 2</th>
                  <th scope="col">Giảng viên 1</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((kl, idx) =>
                  <tr>
                    <td><input class="form-check-input" type="checkbox" /></td>
                    <td>{kl.name}</td>
                    <td>{kl.score}</td>
                    <td>{kl.date}</td>
                    <td>{kl.council.name}</td>
                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                  </tr>)}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dissertation;