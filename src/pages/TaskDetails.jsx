import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons";
import Button from "../components/Button";
import Input from "../components/Input";
import SideBar from "../components/Sidebar";
import TimeSelect from "../components/TimeSelect";
import { useDeleteTask } from "../hooks/data/use-delete-task";
import { useGetTask } from "../hooks/data/use-get-task";
import { useUpdateTask } from "../hooks/data/use-update-task";

const TaskDetailsPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: task } = useGetTask({
    taskId,
    onSuccess: (task) => {
      reset(task);
    },
  });

  const { mutate: deleteTask, isPending: deleteTaskIsLoading } =
    useDeleteTask(taskId);

  const { mutate: updateTask, isPending: updateTaskIsLoading } =
    useUpdateTask(taskId);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSaveClick = async (data) => {
    updateTask(data, {
      onError: () => {
        toast.error("Erro ao atualizar a tarefa");
      },
      onSuccess: () => {
        toast.success("Tarefa atualizada com sucesso");
      },
    });
  };

  const handleDeleteClick = async () => {
    deleteTask(undefined, {
      onError: () => {
        toast.error("Erro ao deletar tarefa");
      },
      onSuccess: () => {
        toast.success("Tarefa deletada com sucesso");
        navigate(-1);
      },
    });
  };

  return (
    <div className="flex">
      <SideBar />

      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <button
              className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary"
              onClick={handleBackClick}
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-1 text-xs">
              <Link className="cursor-pointer text-brand-text-gray" to="/">
                Minhas tarefas
              </Link>
              <ChevronRightIcon className="text-brand-text-gray" />
              <span className="font-semibold text-brand-primary">
                {task?.title}
              </span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>

          <Button
            color="danger"
            className="h-fit self-end"
            onClick={handleDeleteClick}
          >
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>

        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="space-y-6 rounded-xl bg-brand-white p-6">
            <div>
              <Input
                id="title"
                label="Título"
                {...register("title", {
                  required: "O titulo é obrigatório",
                  validate: (value) =>
                    !value.trim() ? "O Título não pode estar vazio" : true,
                })}
                errorMessage={errors.title?.message}
              />
            </div>
            <div>
              <TimeSelect
                {...register("time", {
                  required: "O horário é obrigatório",
                })}
                errorMessage={errors.time?.message}
              />
            </div>
            <div>
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
            </div>
          </div>

          <div className="flex w-full justify-end gap-3">
            <Button
              size="large"
              color="primary"
              type="submit"
              disabled={updateTaskIsLoading || deleteTaskIsLoading}
            >
              {(updateTaskIsLoading || deleteTaskIsLoading) && (
                <LoaderIcon className="animate-spin" />
              )}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
