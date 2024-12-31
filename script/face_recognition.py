import os
from deepface import DeepFace
from datetime import datetime

face_detection_model = "retinaface"
face_recognition_model = "Facenet"
face_database_path = "./person"
date = datetime.now().strftime("%Y-%m-%d")
face_recognition_path = f"./upload/{date}/"

print(face_recognition_path)

# 获取文件夹中的所有图片文件
images = [f for f in os.listdir(
    face_recognition_path) if f.endswith(('.jpg', '.png', '.jpeg'))]
print(images)
matched_name_set = set()

# 遍历每张图片并进行人脸识别
for image_name in images:
    image_path = os.path.join(face_recognition_path, image_name)

    # 使用 DeepFace 进行人脸识别
    try:
        res = DeepFace.find(
            img_path=image_path,
            db_path=face_database_path,
            model_name=face_recognition_model,
            detector_backend=face_detection_model)
        print("res: ")
        print(res)
        print("----------------")

        if res[0].empty:
            print("没有检测到人脸！！！")
        else:
            # 取出匹配上的人名
            best_match: str = res[0].iloc[0]
            match_name = best_match["identity"].split("/")[2]
            print(f"match_name: {match_name}")
            matched_name_set.add(match_name)
            # 输出每张图片中的检测结果
            print(f"图片: {image_name}，检测到以下人脸：")
            x = best_match["source_x"]
            y = best_match["source_y"]
            w = best_match["source_w"]
            h = best_match["source_h"]
            print(f"x:{x}, y:{y}, w:{w}, h:{h}")

    except Exception as e:
        print(f"处理图片 {image_name} 时出错: {e}")

index = 1
for item in matched_name_set:
    with open("./match/matched_name.txt", "a") as file:
        file.write(f"{index}: {item}\n")
    index += 1
