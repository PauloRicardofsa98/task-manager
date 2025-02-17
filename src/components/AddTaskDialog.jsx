import "./AddTaskDialog.css";

import PropTypes from "prop-types";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { toast } from "sonner";
import { v4 } from "uuid";

import { LoaderIcon } from "../assets/icons";
import { useAddTask } from "../hooks/data/use-add-task";
import Button from "./Button";
import Input from "./Input";
import TimeSelect from "./TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const { mutate: addTask } = useAddTask();

  const nodeRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async ({ title, description, time }) => {
    const task = {
      id: v4(),
      title,
      description,
      time,
      status: "not_started",
    };
    addTask(task, {
      onError: () => {
        toast.error("Erro ao adicionar tarefa");
      },
      onSuccess: () => {
        handleClose();
        reset();
        toast.success("Tarefa adicionada com sucesso");
      },
    });
  };

  const handleCancel = () => {
    handleClose();
    reset();
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova Tarefa{" "}
              </h2>
              <p className="mb-4 mt-1 text-sm text-brand-text-gray">
                Insira as informações abaixo
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-[336px] flex-col space-y-4"
              >
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  errorMessage={errors.title?.message}
                  {...register("title", {
                    required: "O título é obrigatório",
                    validate: (value) =>
                      !value.trim() ? "O título não pode estar vazio" : true,
                  })}
                  disabled={isSubmitting}
                />

                <TimeSelect
                  errorMessage={errors.time?.message}
                  {...register("time", {
                    required: "O horário é obrigatório",
                  })}
                  disabled={isSubmitting}
                />

                <Input
                  id="description"
                  label="Descrição"
                  {...register("description", {
                    required: "A descrição é obrigatória",
                    validate: (value) =>
                      !value.trim() ? "A descrição não pode estar vazia" : true,
                  })}
                  errorMessage={errors.description?.message}
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    color="secondary"
                    className="w-full"
                    onClick={handleCancel}
                    type="button"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <LoaderIcon className="animate-spin" />}
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
};

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddTaskDialog;
