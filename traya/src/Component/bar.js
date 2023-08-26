import React from 'react'

function bar() {
  return (
    <>
    {/* <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
 Traya.
</button> */}


<div class="modal top fade"
     id="exampleModal"
     tabindex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
     data-mdb-backdrop="true"
     data-mdb-keyboard="true">
  <div class="modal-dialog modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Traya.</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default bar


{/* <div class="modal-dialog modal-fullscreen-sm-down">
  
</div> */}