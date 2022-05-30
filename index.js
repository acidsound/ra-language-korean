module.exports = {
    ra: {
        action: {
            add_filter: '필터 추가',
            add: '추가',
            back: '뒤로가기',
            bulk_actions: '%{smart_count} 개 항목 선택됨',
            cancel: '취소',
            clear_input_value: '값 지우기',
            clone: '복제',
            confirm: '확인',
            create: '생성',
            delete: '삭제',
            edit: '수정',
            export: '내보내기',
            list: '목록',
            refresh: '새로고침',
            remove_filter: '이 필터 지우기',
            remove: '지우기',
            save: '저장',
            search: '검색',
            show: '보기',
            sort: '정렬',
            undo: '되돌리기',
            unselect: '선택 취소',
            expand: '펼치기',
            close: '닫기',
            open_menu: '메뉴 열기',
            close_menu: '메뉴 닫기',
        },
        boolean: {
            true: '네',
            false: '아니오',
            null: ' ',
        },
        page: {
            create: '%{name} 만들기',
            dashboard: '대시보드',
            edit: '%{name} #%{id}',
            error: '무언가 잘못되었습니다.',
            list: '%{name}',
            loading: '로딩 중',
            not_found: '찾을 수 없습니다',
            show: '%{name} #%{id}',
            empty: '아직 %{name} 가 없습니다.',
            invite: '다른 사용자를 초대하시겠습니까?',
        },
        input: {
            file: {
                upload_several:
                    '업로드 할 파일들을 떨어뜨리거나 선택하십시오.',
                upload_single: '업로드 할 파일을 떨어뜨리거나 선택하십시오.',
            },
            image: {
                upload_several:
                    '업로드 할 이미지들을 떨어뜨리거나 선택하십시오.',
                upload_single:
                    '업로드 할 이미지를 떨어뜨리거나 선택하십시오.'
            },
            references: {
                all_missing: '참조할 데이터를 찾을 수 없습니다.',
                many_missing:
                    '하나 이상 연관 참조를 더 이상 사용할 수 없습니다.',
                single_missing:
                    '연관 참조를 더 이상 사용할 수 없습니다.',
            },
            password: {
                toggle_visible: '암호 가리기',
                toggle_hidden: '암호 보이기',
            },
        },
        message: {
            about: '소개',
            are_you_sure: '확실합니까?',
            bulk_delete_content:
                '이 %{smart_count} 개의 항목들을 지우시겠습니까?',
            bulk_delete_title:
                '%{smart_count}개의 %{name} 삭제',
            delete_content: '이 항목을 삭제하시겠습니까?',
            delete_title: '%{name} #%{id} 삭제',
            details: '자세히',
            error:
                "클라이언트의 오류로 요청을 완료하지 못했습니다.",
            invalid_form: '제출한 내용이 올바르지 않습니다. 오류를 확인해주세요.',
            loading: '페이지 로딩 중입니다. 잠시만 기다리세요.',
            no: '아니오',
            not_found:
                'URL을 잘못 입력하거나 올바르지 않은 링크입니다.',
            yes: '네',
            unsaved_changes:
                "일부 변경사항이 저장되지 않았습니다. 무시하시겠습니까?",
        },
        navigation: {
            no_results: '결과를 찾을 수 없습니다.',
            no_more_results:
                '%{page} 페이지는 범위 밖의 페이지입니다. 이전 페이지를 시도하세요.',
            page_out_of_boundaries: '%{page} 페이지는 범위 밖입니다.',
            page_out_from_end: '마지막 페이지 이후로 이동할 수 없습니다.',
            page_out_from_begin: '첫 페이지 이전으로 이동할 수 없습니다',
            page_range_info: '전체 %{total} 중 %{offsetBegin}-%{offsetEnd}',
            page_rows_per_page: '페이지당 행 수:',
            next: '다음',
            prev: '이전',
            skip_nav: '콘텐츠로 건너뛰기',
        },
        sort: {
            sort_by: '%{field} %{order}으로 정렬',
            ASC: '오름차순',
            DESC: '내림차순',
        },
        auth: {
            auth_check_error: '계속하기 위해 로그인 하십시오',
            user_menu: '프로필',
            username: '사용자명',
            password: '암호',
            sign_in: '로그인',
            sign_in_error: '인증 실패, 다시 시도하세요',
            logout: '로그아웃',
        },
        notification: {
            updated: '%{smart_count}개 항목 업데이트',
            created: '항목 생성',
            deleted: '%{smart_count}개 항목 삭제',
            bad_item: '부정확한 항목',
            item_doesnt_exist: '항목이 없습니다',
            http_error: '서버 통신 오류',
            data_provider_error:
                'dataProvider 오류. 자세한 내용은 콘솔을 확인하세요.',
            i18n_error:
                '특정 언어에 대해 번역을 로드할 수 없습니다',
            canceled: '취소함',
            logged_out: '세션이 종료되었습니다, 재연결하세요.',
        },
        validation: {
            required: '필수',
            minLength: '최소 %{min} 글자 이상이어야 합니다',
            maxLength: '최대 %{max} 글자 이하여야 합니다',
            minValue: '최소 %{min} 이상이어야 합니다',
            maxValue: '최대 %{max} 이하여햐 합니다',
            number: '숫자여야합니다',
            email: '올바른 이메일 형식이어야 합니다',
            oneOf: '최소 하나 선택하여 햡나다: %{options}',
            regex: '반드시 지정한 형식(regexp)이어야 합니다 : %{pattern}',
        },
    },
};
