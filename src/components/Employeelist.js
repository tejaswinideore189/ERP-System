import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Employeelist.css';
import { Link } from 'react-router-dom';

function Employeelist() {
    const [show, setShow] = useState(false);
  return (
    <div>


       <div className="row">
      <div className="col-2">
      <Sidebar show={show} setShow={setShow}/>
      </div>
      </div>
      <div id="root" className={!show ? "col-9" : "col-10"} style={{overflow:"hidden"}}>
      <div class="container" style={{ marginLeft:"20%" , marginRight:"-9%"}}>
    <div class="row">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col col-sm-5 col-xs-12">
                            <h4 class="title">Data <span>List</span></h4>
                        </div>
                        <div class="col-sm-7 col-xs-12 text-right">
                            <div class="btn_group">
                                <button class="btn btn-sm btn-default"><i class="fa fa-file"></i>
                                    Export to Excel
                                </button>
                                <Link to="/" class="btn btn-sm btn-default"><i class="fa fa-plus-circle"></i>
                                    Add New User
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Status</th>
                                <th>Job Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div class="user_icon">
                                        <img src="images/img1.jpg" alt=""/>
                                    </div>    
                                    Vincent Williamson</td>
                                <td>31</td>
                                <td><span class="status">Active</span></td>
                                <td>iOS Developer</td>
                                <td>
                                    <ul class="action-list">
                                        <li><Link to="/" class="edit" data-tip="setting"><i class="fa fa-cog"></i></Link></li>
                                        <li><Link to="/" class="delete" data-tip="delete"><i class="fa fa-times-circle"></i></Link></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <div class="user_icon">
                                        <img src="images/img2.jpg" alt=""/>
                                    </div>       
                                    Taylor Reyes</td>
                                <td>22</td>
                                <td><span class="status inactive">Inactive</span></td>
                                <td>UI/UX Developer</td>
                                <td>
                                    <ul class="action-list">
                                        <li><Link to="/" class="setting" data-tip="setting"><i class="fa fa-cog"></i></Link></li>
                                        <li><Link to="/" class="delete" data-tip="delete"><i class="fa fa-times-circle"></i></Link></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <div class="user_icon">
                                        <img src="images/img3.jpg" alt=""/>
                                    </div>   
                                    Justin Block</td>
                                <td>26</td>
                                <td><span class="status">Active</span></td>
                                <td>Frontend Developer</td>
                                <td>
                                    <ul class="action-list">
                                        <li><Link to="/" class="setting" data-tip="setting"><i class="fa fa-cog"></i></Link></li>
                                        <li><Link to="/" class="delete" data-tip="delete"><i class="fa fa-times-circle"></i></Link></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <div class="user_icon">
                                        <img src="images/img4.png" alt=""/>
                                    </div>   
                                    Sean Guzman</td>
                                <td>26</td>
                                <td><span class="status block">Blocked</span></td>
                                <td>Web Designer</td>
                                <td>
                                    <ul class="action-list">
                                        <li><Link to="/" class="setting" data-tip="setting"><i class="fa fa-cog"></i></Link></li>
                                        <li><Link to="/" class="delete" data-tip="delete"><i class="fa fa-times-circle"></i></Link></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <div class="user_icon">
                                        <img src="images/img5.jpg" alt=""/>
                                    </div>   
                                    Keith Carter</td>
                                <td>20</td>
                                <td><span class="status">Active</span></td>
                                <td>Graphic Designer</td>
                                <td>
                                    <ul class="action-list">
                                        <li><Link to="/" class="setting" data-tip="setting"><i class="fa fa-cog"></i></Link></li>
                                        <li><Link to="/" class="delete" data-tip="delete"><i class="fa fa-times-circle"></i></Link></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col col-sm-6 col-xs-8">Showing <b>5</b> out of <b>25</b> entries</div>
                        <div class="col-sm-6 col-xs-4">
                            <ul class="pagination hidden-xs pull-right">
                                <li><Link to="/">Prev</Link></li>
                                <li class="active"><Link to="/">1</Link></li>
                                <li><Link to="/">2</Link></li>
                                <li><Link to="/">3</Link></li>
                                <li><Link to="/">4</Link></li>
                                <li><Link to="/">5</Link></li>
                                <li><Link to="/">Next</Link></li>
                            </ul>
                            {/* <ul class="pagination visible-xs pull-right">
                                <li><Link to="/">pre</Link></li>
                                <li><Link to="/">next</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Employeelist
