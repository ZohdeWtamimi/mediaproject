import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
// import { json } from "react-router-dom";
import GroupService from "../../apis/GroupService";

function MyGroupModel({ modalOpened, setModalOpened, setGroupRender }) {
  const theme = useMantineTheme();

  const [data, setData] = useState({
    group_name:"",
    group_img :"",
    })


    const handleChange = (e)=>{
      const newData = { ...data }
      newData[e.target.name] = e.target.value
      setData(newData)
      console.log(newData)
    }

    const handleImage = (e) =>{
      const newData = { ...data }
      newData[e.target.name] = e.target.files[0]
      setData(newData)
      console.log(newData)

    }


  const handelsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('group_name', data.group_name)
    formData.append('group_img', data.group_img)
    formData.append('user_id', JSON.parse(localStorage.getItem('user')).id)
    
    console.log(formData.get('group_name'))
    console.log(formData.get('group_img'))
    console.log(formData.get('user_id'))
    GroupService.createGroup(formData).then(function(res){
      console.log(res)
      setGroupRender({state: 'create group'})
      setModalOpened(false)
      }) 
    }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form onSubmit={handelsubmit} className="infoForm">
        <h1>Create New Group</h1>

        <div>
          <input
            type="text"
            onChange={handleChange}
            className="infoInput"
            name="group_name"
            placeholder="Group Name"
          />

        </div>

        

        <div>

            Cover Image
            <input type="file" name="group_img"  onChange={handleImage}/>
        </div>

        <button type="submit" className="button infoButton">Create</button>
      </form>
    </Modal>
  );
}

export default MyGroupModel;
