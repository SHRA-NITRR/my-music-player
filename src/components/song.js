import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectSong } from '../actions';

const Song=(props)=>{
    const isPlayIng=props.songIndex==props.playingSongIndex;
    return(
        <li>
            <div className="audiolibrary-track-head">
                <div className="audiolibrary-column audiolibrary-column-play-control" >  
                    <div className={isPlayIng?"playing":"album-art" }>
                        <div className="album-art-background hid">
                        </div>
                        <button className="glyphicon glyphicon-play songs" 
                            onClick={()=>props.playSong(props.songIndex, props.playlistName, props.src, props.title)}
                        />

                    </div>
                </div>
                <div className="audiolibrary-column audiolibrary-column-title">
                    {props.title}
                </div>
                <div className="audiolibrary-column audiolibrary-column-tag" >
                ......................
                </div>
                <div className="audiolibrary-column audiolibrary-column-duration">  

                {props.duration}
                </div>
            </div>

      </li>
      )

}
const mapStateToProps = state => {
    const { selecedSong } = state;
  
    return {
      playingSongIndex:selecedSong.songIndex
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      playSong:(songIndex, playlistName, src, title)=>dispatch(selectSong(songIndex, playlistName, src, title))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Song);