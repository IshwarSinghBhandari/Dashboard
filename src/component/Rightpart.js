import React from 'react'
import Righthead from './Righthead'

import Right2part from './Right2part'
import Right1part from './Right1part'


export default function Rightpart() {
  return (
    <section class="p-4 right-part">
        <Righthead/>
        <div class="row">
        <section class="sec1 col-9">
          <Right1part/>
        </section>
        <section class="sec2 col-3">
            <Right2part/>
        </section>
        </div>
    </section>
        
    
  )
}
