"use client";
import { useParams } from "next/navigation";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as courseClient from "../../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();

  const fetchModulesForCourse = async () => {
    const modules = await courseClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  const addModuleHandler = async () => {
    const newModule = await courseClient.createModuleForCourse(cid as string, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);

  return (
    <div id="wd-modules">
      <input
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="New Module Name"
      />
      <button onClick={addModuleHandler}>Add Module</button>
      
      <ul>
        {modules.map((module: any) => (
          <li key={module._id} className="wd-module">
            {!module.editing && module.name}
            {module.editing && (
              <input
                value={module.name}
                onChange={(e) =>
                  updateModuleHandler({ ...module, name: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateModuleHandler({ ...module, editing: false });
                  }
                }}
              />
            )}
            <button onClick={() => dispatch(editModule(module._id))}>Edit</button>
            <button onClick={() => deleteModuleHandler(module._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}