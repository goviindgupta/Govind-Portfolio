import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
import { v4 as uuidv4 } from "uuid";

const EditPage = () => {
  const [params] = useSearchParams();
  const [texts, setTexts] = useState([]);

  const addText = () => {
    setTexts([...texts, { id: uuidv4() }]); // guaranteed unique
  };

  return (
    <div>
      <div>
        <img src={params.get("url")} alt="" width="250px" />
        {texts.map((t) => (
          <Text key={t.id} />
        ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
    </div>
  );
};

export default EditPage;
